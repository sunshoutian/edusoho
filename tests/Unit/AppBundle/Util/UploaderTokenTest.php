<?php

namespace Tests\Unit\AppBundle\Util;

use Biz\BaseTestCase;
use AppBundle\Util\UploaderToken;

class UploaderTokenTest extends BaseTestCase
{
    public function testMake()
    {
        $user = $this->getCurrentUser();
        $uploaderToken = new UploaderToken();
        $token = $uploaderToken->make('courselesson', 3, 'private');

        $result = base64_decode($token);
        $contents = explode('|', $result);
        $this->assertEquals($user['id'], $contents[0]);
        $this->assertEquals('courselesson', $contents[1]);
        $this->assertEquals(3, $contents[2]);
        $this->assertEquals('private', $contents[3]);
        $this->assertEquals(time() + 86400, $contents[4]);
        $this->assertEquals(md5("{$user['id']}|courselesson|3|private|".(time() + 86400)."|{$user['salt']}"), $contents[5]);
    }

    public function testParse()
    {
        $uploaderToken = new UploaderToken();
        //传入空
        $result = $uploaderToken->parse(null);
        $this->assertNull($result);

        //传入过时的token
        $result = $uploaderToken->parse('MXxjb3Vyc2VsZXNzb258M3xwcml2YXRlfDg2NDAwfDkwMGFkZWQzNWUxNzIwZjYyY2QyYzUwNWJlMGJlNzU2');
        $this->assertNull($result);

        //传入不符合sign的token
        $result = $uploaderToken->parse('MXxjb3Vyc2VsZXNzb258M3xwcml2YXRlfDE1MTg1MTMzMjJ8NTc4NDYwMjU2MDllMzQwZWQxMDA0OWFlM2ZkN2M5M2U');
        $this->assertNull($result);

        //正常传入的token
        $user = $this->getCurrentUser();
        $token = $uploaderToken->make('courselesson', 3, 'private');
        $result = $uploaderToken->parse($token);
        $this->assertEquals($user['id'], $result['userId']);
        $this->assertEquals('courselesson', $result['targetType']);
        $this->assertEquals(3, $result['targetId']);
        $this->assertEquals('private', $result['bucket']);
    }
}
