<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Koriym\ReduxReactSsr\ReduxReactSsr;
use Symfony\Component\HttpFoundation\Request;

class AppController extends Controller
{
    /**
     * @Route(
     *     "/{_locale}",
     *     requirements={"_locale": "en|fr|"}
     * )
     */
    public function homeAction(Request $request, $_locale)
    {
        $ssr = new ReduxReactSsr(
            file_get_contents(__DIR__ . '/../../../web/js/react.bundle.js'),
            file_get_contents(__DIR__ . '/../../../web/js/app.bundle.js')
        );

        if (!$_locale) {
            $_locale = $this->detectLocale($request->getClientIp());
        }

        $langData = file_get_contents(__DIR__ . '/../../../app/data/'.$_locale.'.json');
        $data = json_decode($langData, true);
        $state = ["home" => ["textData" => $data, "locale" => $_locale]];

        ob_start();
        list($html, $js) = $ssr('App', $state);
        ob_end_clean();

       return $this->render('home.html.twig', ["html" => $html, "js" => $js]);
    }

    private function detectLocale($ip)
    {
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, 'http://ipinfo.io/' . $ip);
        curl_setopt($ch, CURLOPT_TIMEOUT, 3);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

        $result = curl_exec($ch);
        curl_close($ch);

        if ($result) {
            $data = json_decode($result);
            if ($data && isset($data->country) && strtolower($data->country) === "fr") {
                return "fr";
            }
        }

        return "en";
    }
}
