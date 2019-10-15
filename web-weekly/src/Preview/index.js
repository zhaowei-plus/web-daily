import React, {Fragment} from 'react'
import {Button} from 'antd'

import PhonePreview from '../PhonePreview'

export default () => {
    const handlePreviewIframe = () => {
        PhonePreview.iframe('https://3g.163.com/touch/news/', '网易云手机端')
    }

    const handlePreviewGif = () => {
        PhonePreview.gif('https://imgsa.baidu.com/exp/w=480/sign=130d4a4a06d162d985ee631421dea950/eaf81a4c510fd9f9c62f51e7292dd42a2834a407.jpg', '手机截图预览')
    }

    const handlePreviewSms = () => {
        PhonePreview.sms('你好，我是华为手机助手，请问你是在呼唤我吗？')
    }

    const handlePreviewOther = () => {
        PhonePreview.preview((
            <div>你好，自定义预览</div>
        ))
    }

    return (
        <Fragment>
            <Button onClick={handlePreviewIframe}>预览网页</Button>
            <Button onClick={handlePreviewGif}>预览图片</Button>
            <Button onClick={handlePreviewSms}>预览短信</Button>
            <Button onClick={handlePreviewOther}>预览其他</Button>
        </Fragment>
    )

}
