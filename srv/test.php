<?php
/**
 * Created by PhpStorm.
 * User: alexey
 * Date: 23.04.17
 * Time: 15:34
 */
require __DIR__ . '/../vendor/autoload.php';

require_once 'SmtpApi.php';

$sPubKey = '
-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCmMP/nI7u67ywRwnhEjTZREqs3
X8A2EokKWwFBanLUsPsLrlY+wI54aHbL1kAsBQvD7gN82FR77Rvws7DaQoQfNScZ
Fzd/vCHs7zgQX8T0PCZ+igabKBE/opsrXCz1ke9pd0Tu4ekL+xjP2D5Pa2r2k4qE
v/2E4mn/ERVLOfQw5QIDAQAB
-----END PUBLIC KEY-----
';

$oApi = new SmtpApi($sPubKey);

$aEmail = array(
  'html' => '<p>HTML текст письма</p>',
  'text' => 'Текст письма',
  'encoding' => 'UTF-8',
  'subject' => 'Тема письма',
  'from' => array(
    'name' => 'Имя Отправителя',
    'email' => 'alexd73@gmail.com',
  ),
  'to' => array(
    array(
      'name' => 'Имя Получателя',
      'email' => 'alexd73@gmail.com'
    ),
    array(
      'email' => 'recipient2@example.com'
    ),
  ),
  'bcc' => array(
    array(
      'name' => 'Имя Получателя',
      'email' => 'recipient3@example.com'
    ),
    array(
      'email' => 'recipient4@example.com'
    ),
  ),
);
$res = $oApi->send_email($aEmail);
if ($res['error']){ // проверяем успешность операции
  die('Ошибка: ' . $res['text']);
} else {
  // успех
}