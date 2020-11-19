<?php

namespace App\Controller\Admin;

use App\Controller\BaseController;
use App\Entity\Article;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;

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
    public function getArticles(Request $request): Response
    {
        $page = intval($request->query->get('page'));
        $perPage = intval($request->query->get('perPage'));
        $sort = json_decode($request->query->get('sort'));
        //$filter = json_decode($request->query->get('filter'));

        $articles = $this->getDoctrine()->getRepository(Article::class)->findByPage($page, $perPage, $sort);

        if (!empty($articles)) {
            $this->httpSuccess();
        }

        $view = $this
            ->view($articles)
            ->setHeader('Content-Range', "posts 0-1/20");

        return $this->outputJson($view);
    }

    /**
     * Show article by ID
     */
    public function getArticle(int $id): Response
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
