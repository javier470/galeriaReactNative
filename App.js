/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import styles from './src/styles/styles'
import { BodyI } from './src/Components/bodyComponent';


const App = () => {

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>SnapShot</Text>
        <TextInput placeholder='Search...' style={styles.areaText} />
        <View style={styles.headerBtn}>
          <TouchableOpacity style={styles.btn} ><Text style={styles.text1}>Mountains</Text></TouchableOpacity>
          <TouchableOpacity style={styles.btn} ><Text style={styles.text1}>Baches</Text></TouchableOpacity>
          <TouchableOpacity style={styles.btn} ><Text style={styles.text1}>Birds</Text></TouchableOpacity>
          <TouchableOpacity style={styles.btn} ><Text style={styles.text1}>Food</Text></TouchableOpacity>
        </View>
      </View>
      <View style={styles.body}>
        <Text style={styles.title}>Mountains</Text>
        <View style={styles.imgView}>
          <Image source={{ uri: 'https://www.muchbetteradventures.com/magazine/content/images/size/w2000/2019/06/13091225/iStock-157644719.jpg' }} style={styles.img} />
          <Image source={{ uri: 'https://rankedex.com/image/catalog/articles/highest-mountains-in-the-world/0006-annapurna-i.jpg' }} style={styles.img} />
          <Image source={{ uri: 'https://i0.wp.com/www.volant.travel/wp-content/uploads/2018/01/Torres-del-Paine-at-mountain-lake-scaled.jpg?resize=400%2C400&ssl=1' }} style={styles.img} />
          <Image source={{ uri: 'https://cdn.britannica.com/67/19367-050-885866B4/Valley-Taurus-Mountains-Turkey.jpg' }} style={styles.img} />

          <Image source={{ uri: 'https://media.istockphoto.com/photos/snowcapped-k2-peak-picture-id1288385045?k=20&m=1288385045&s=612x612&w=0&h=kcZXuKvLsEbbGakLlcZpolhBT7PyC9AQWiv2kZ7aHfQ=' }} style={styles.img} />
          <Image source={{ uri: 'https://www.atlasandboots.com/wp-content/uploads/2019/05/ama-dablam2-most-beautiful-mountains-in-the-world.jpg' }} style={styles.img} />
          <Image source={{ uri: 'https://idsb.tmgrup.com.tr/ly/uploads/images/2020/11/25/thumbs/800x531/74707.jpg' }} style={styles.img} />
          <Image source={{ uri: 'https://peakvisor.com/photo/Andes-Mountains-Argentina-Cerro-Aconcagua-1.jpg' }} style={styles.img} />

          <Image source={{ uri: 'https://images.unsplash.com/photo-1614586125858-e695dd97d1b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YW5kZXMlMjBtb3VudGFpbnN8ZW58MHx8MHx8&w=1000&q=80' }} style={styles.img} />
          <Image source={{ uri: 'https://www.worldatlas.com/r/w1200/upload/1c/2b/66/shutterstock-149198729-2.jpg' }} style={styles.img} />
          <Image source={{ uri: 'https://geographical.co.uk/media/k2/items/cache/852c2fa5e5468761c3ae8b796ca9be85_XL.jpg' }} style={styles.img} />
          <Image source={{ uri: 'https://media.istockphoto.com/photos/misty-blue-mountains-on-sunrise-picture-id613111906?k=20&m=613111906&s=612x612&w=0&h=V_zPi_4GBSDVWC1_LxDcw3lwVo1qkSoan2-7A2oiTO0=' }} style={styles.img} />

          <Image source={{ uri: 'https://geographical.co.uk/media/k2/items/cache/e533c4b8d2d2d3798f3271c35ca6e050_XL.jpg' }} style={styles.img} />
          <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Fann_Mountains_vertical_2013.jpg' }} style={styles.img} />
          <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1yEhWTHAGZ6WH9_seL-0PiyZKvlypz_7gtw&usqp=CAU' }} style={styles.img} />
          <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQReBcb4ldVFOaK6w_bKnYWOBmg6JJaYYkUVw&usqp=CAU' }} style={styles.img} />

          <Image source={{ uri: 'https://lh3.googleusercontent.com/ioE2Vmd8tbo2_OlcIZ03zGVF8ezaiYG1L6BhEQ4Rl8xFJmgd-6jNSwInBc7qrhNx' }} style={styles.img} />
          <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRwKSTkf0-XJ4159Zkp_fPpeZ_gdsn4FAgWw&usqp=CAU' }} style={styles.img} />
          <Image source={{ uri: 'https://www.skibasics.com/news/wp-content/uploads/49428195153_ddbd3bbb45_o-2-scaled.jpg' }} style={styles.img} />
          <Image source={{ uri: 'https://www.nps.gov/common/uploads/grid_builder/mountains/crop16_9/9AC3DBEF-CC56-FFF9-6763BD322DB7F356.jpg?width=950&quality=90&mode=crop' }} style={styles.img} />

          <Image source={{ uri: 'https://lh3.googleusercontent.com/2ui65GirZGDie_2e63TWgqv1ev93xaYu222SRJjJkKlnWqvc4gqG12HjLcoalmTJ' }} style={styles.img} />
          <Image source={{ uri: 'https://www.geomountains.org/media/djmediatools/cache/images/1_GEO_MOUNTAINS/Website_Headers/5120x2133-crop-90-geo-mountains-dolomites-header-layer-1440x600.jpg' }} style={styles.img} />
          <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWZ7cjW3yq_ME_AnThDvWX6MaKeKffC4stNw&usqp=CAU' }} style={styles.img} />
          <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxWmYffx-RdNL7i31E0FMvQhznf_jqFX2GTA&usqp=CAU' }} style={styles.img} />
        </View>

      </View>
    </View>
  );
};



export default App;
