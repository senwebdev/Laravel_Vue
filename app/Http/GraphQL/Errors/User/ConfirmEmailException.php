<?php
/**
 * Created by PhpStorm.
 * User: oladipo
 * Date: 24/02/19
 * Time: 12:34
 */

namespace App\Http\GraphQL\Errors\User;


class ConfirmEmailException extends \Exception
{
    private $_options;

    public function __construct($message,
                                $code = 0,
                                Exception $previous = null,
                                $options = array('params'))
    {
        parent::__construct($message, $code, $previous);

        $this->_options = $options;
    }

    public function GetOptions() { return $this->_options; }
}
