import { View, Text } from '@tarojs/components'
import Taro, { useLoad } from '@tarojs/taro'
import { useRef } from 'react'
import './index.less'

export default function Index() {
  const audio = useRef(Taro.createInnerAudioContext())

  useLoad(() => {
    console.log('Page loaded.')
    audio.current.onError(console.log)
    // 找一个会请求失败的路径
    audio.current.src = 'localhost:12312/errorLoadPath'
    audio.current.autoplay = true
  })

  return (
    <View className='index'>
      <Text>Hello world!</Text>
    </View>
  )
}
