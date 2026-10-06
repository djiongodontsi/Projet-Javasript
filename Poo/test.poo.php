<?php
class users
{
    private $name;
    private $prenpom;
    private $email;
    public function setNom($valeur)
    {
        $this->name = $valeur;
    }
    public function getNom()
    {
        return $this->name;
    }

}