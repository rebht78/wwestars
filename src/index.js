import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card'
import 'tachyons';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
                <div>
                    <Card rank="0" name="The Undertaker" pic="https://robohash.org/theundertaker?200x200" email="undertaker@wwe.com"/>
                    <Card rank="1" name="The Rock" pic="https://robohash.org/therock?200x200" email="rock@wwe.com"/>
                    <Card rank="2" name="Roman Reigns" pic="https://robohash.org/roman?200x200" email="roman@wwe.com"/>
                    <Card rank="3" name="Seth Rollins" pic="https://robohash.org/seth?200x200" email="seth@wwe.com"/>
                    <Card rank="4" name="Dean Ambrose" pic="https://robohash.org/dean?200x200" email="dean@wwe.com"/>
                    <Card rank="5" name="The Miz" pic="https://robohash.org/miz?200x200" email="miz@wwe.com"/>
                </div>
                , document.getElementById('root'));
registerServiceWorker();
