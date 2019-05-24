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
        $articles = $this->getDoctrine()->getRepository(Article::class)->findAll();

        return $this->handleView($this->view($articles));
    }

    /**
     * Show all articles
     */
    public function getAllArticles()
    {
        $articles = $this->getDoctrine()->getRepository(Article::class)->findAll();

        return $this->handleView($this->view($articles));
    }
}
