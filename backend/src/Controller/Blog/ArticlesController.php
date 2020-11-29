<?php

namespace App\Controller\Blog;

use App\Controller\BaseController;
use App\Entity\Article;

class ArticlesController extends BaseController
{
    /**
     * Show all available requests
     */
    public function index()
    {
        return ['articles', 'article/{id}'];
    }

    /**
     * Show all articles
     */
    public function getArticles($page)
    {
        $articles = $this->getDoctrine()->getRepository(Article::class)->findByPage($page);

        if (!empty($articles)) {
            $this->httpSuccess();
        }

        return $this->outputJson($this->view($articles));
    }

    /**
     * Show article by ID
     */
    public function getArticle($id)
    {
        $article = $this->getDoctrine()->getRepository(Article::class)->find($id);

        if ($article instanceof Article) {
            $this->httpSuccess();
        } else {
            $this->httpNotFound();
        }

        return $this->outputJson($this->view($article));
    }
}
