<?php

namespace App\Controller\Admin;

use App\Controller\BaseController;
use App\Entity\Article;
use Symfony\Component\HttpFoundation\Response;

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

        $view = $this
            ->view($articles)
            ->setHeader('Content-Range', 'posts 0-1/10');

        return $this->outputJson($view);
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
