import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { HTCardWithImageList, HTText, HTWrapper } from '../../../../components'
import { styles } from './style'
import { HomeHeader } from '../../../../components/Header'
import { SearchInput } from '../../../../components/inputField'


const Blog = () => {
  return (
    <HTWrapper>
      <HomeHeader/>
      <ScrollView>
        <SearchInput />
      </ScrollView>
    </HTWrapper>
  )
}

export default Blog