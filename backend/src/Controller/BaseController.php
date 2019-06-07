<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use FOS\RestBundle\Controller\FOSRestController;

class BaseController extends FOSRestController
{
    private const HTTP_SUCCESS = 200;
    private const HTTP_NOT_FOUND = 404;
    private const HTTP_SERVER_ERROR = 500;

    private $status = self::HTTP_SERVER_ERROR;

    protected function outputJson ($view)
    {
        $view->setStatusCode($this->status);
        return $this->handleView($view);
    }

    protected function httpSuccess() {
        $this->status = self::HTTP_SUCCESS;
    }

    protected function httpNotFound() {
        $this->status = self::HTTP_NOT_FOUND;
    }

    protected function httpError() {
        $this->status = self::HTTP_SERVER_ERROR;
    }
}
