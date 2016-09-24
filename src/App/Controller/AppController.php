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
            $_locale = $this->detectLocale($request);
        }

        $langData = file_get_contents(__DIR__ . '/../../../app/data/'.$_locale.'.json');
        $data = json_decode($langData, true);
        $state = ["home" => ["textData" => $data, "locale" => $_locale]];

        ob_start();
        list($html, $js) = $ssr('App', $state);
        ob_end_clean();

       return $this->render('home.html.twig', ["html" => $html, "js" => $js]);
    }

    private function detectLocale(Request $request)
    {
        return $request->getPreferredLanguage(['en', 'fr']);
    }
}
