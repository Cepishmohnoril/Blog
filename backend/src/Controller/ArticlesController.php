<?php

namespace App\Controller;

use App\Controller\BaseController;
use App\Entity\Article;

class ArticlesController extends BaseController
{
    /**
     * Show all articles
     */
    public function index()
    {
        return $this->json([
            'message' => 'Welcome to your new controller!',
            'path' => 'src/Controller/ArticlesController.php',
        ]);
    }
}
