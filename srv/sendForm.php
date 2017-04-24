<?php
/**
 * Отправляет форму.
 * User: alexey
 * Date: 18.04.17
 * Time: 15:31
 */

require __DIR__ . '/../vendor/autoload.php';

require_once 'SmtpApi.php';


if((isset($_POST['name'])&&$_POST['name']!="")
  &&(isset($_POST['phone'])&&$_POST['phone']!="")
  &&(isset($_POST['agree'])&&$_POST['agree']!=""))
{
  $sPubKey = '
-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCmMP/nI7u67ywRwnhEjTZREqs3
X8A2EokKWwFBanLUsPsLrlY+wI54aHbL1kAsBQvD7gN82FR77Rvws7DaQoQfNScZ
Fzd/vCHs7zgQX8T0PCZ+igabKBE/opsrXCz1ke9pd0Tu4ekL+xjP2D5Pa2r2k4qE
v/2E4mn/ERVLOfQw5QIDAQAB
-----END PUBLIC KEY-----
';

  $oApi = new SmtpApi($sPubKey);
  $name = htmlspecialchars($_POST["name"]); // пишeм дaнныe в пeрeмeнныe и экрaнируeм спeцсимвoлы
  $phone = htmlspecialchars($_POST["phone"]);
  if (isset($_POST['markiza'])) {
    $subject = 'Заказ маркизы';
    $message = '<b>' . $name . '</b> заказал маркизу <b>' . $_POST['markiza'] .
      '</b> и ждет звонока на номер ' . $phone;
  } else {
    $subject = 'Сделать расчет';
    $message = '<b>' . $name . '</b> заказал обратный звонок на номер ' . $phone;
  }
  $json = array();

  $aEmail = array(
    'html' => $message,
    'text' => htmlspecialchars($name),
    'encoding' => 'UTF-8',
    'subject' => $subject,
    'from' => array(
      'name' => 'Письмо с лендинга',
      'email' => 'alexd73@gmail.com',
    ),
    'to' => array(
      array(
        'name' => 'Евгения',
        'email' => 'Esimka@mail.ru'
      ),
      array(
        'name' => 'Александр',
        'email' => 'compilator@list.ru'
      ),
    ),
    'bcc' => array(
      array(
        'name' => 'Alexd',
        'email' => 'alexey@jetstd.ru'
      ),
    )
  );
  $res = $oApi->send_email($aEmail);
  if ($res['error']){ // проверяем успешность операции
    $json['error'] = 'Ошибка: ' . $res['text'];
  } else {
    $json['error'] = 0; // oшибoк нe былo
    // добавляем счетчик
    $file = 'count.txt';
    $count = (int)file_get_contents($file);
    file_put_contents($file, ++$count);
  }




  echo json_encode($json); // вывoдим мaссив oтвeтa
}