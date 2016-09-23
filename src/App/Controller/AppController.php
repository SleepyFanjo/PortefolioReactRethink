<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Koriym\ReduxReactSsr\ReduxReactSsr;

class AppController extends Controller
{
    /**
     * @Route("/")
     */
    public function homeAction()
    {
        $ssr = new ReduxReactSsr(
            file_get_contents(__DIR__ . '/../../../web/js/react.bundle.js'),
            file_get_contents(__DIR__ . '/../../../web/js/app.bundle.js')
        );

        $state = ['home' => ['message' => 'Hello SSR !!!']];
        ob_start();
        list($html, $js) = $ssr('App', $state);

       return $this->render('home.html.twig', ["html" => $html, "js" => $js]);
    }
}
