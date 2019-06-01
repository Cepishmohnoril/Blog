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
        return ['articles', 'article/{id}'];
    }

    /**
     * Show all articles
     */
    public function getArticles()
    {
        $articles = $this->getDoctrine()->getRepository(Article::class)->findAll();

        return $this->handleView($this->view($articles));
    }

    public function getArticle($id)
    {
        $articles = $this->getDoctrine()->getRepository(Article::class)->find($id);

        return $this->handleView($this->view($articles));
    }
}
