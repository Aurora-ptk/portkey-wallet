import { defaultColors } from 'assets/theme';
import GStyles from 'assets/theme/GStyles';
import { TextM, TextS } from 'components/CommonText';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { pTd } from 'utils/unit';
import { useLanguage } from 'i18n/hooks';

export function DiscoverRecordListSection() {
  const { t } = useLanguage();

  return (
    <ScrollView style={styles.wrap}>
      <View style={styles.header}>
        <TextS>{t('Records')}</TextS>
        <TextS>{t('See All')}</TextS>
      </View>

      <View>
        {[1, 2, 3].map(ele => (
          <TextM key={ele}>{ele}</TextM>
        ))}
      </View>

      {/* {[].map((group, index) => (
        <View key={index}>
          <TextM style={[FontStyles.font3, styles.groupTitle]}>{group.title}</TextM>
          <View style={styles.itemsGroup}>
            {group.items.map((item, i) => (
              <TouchableOpacity key={i} style={styles.itemWrap} onPress={() => onClickJump(item)}>
                <Image style={styles.image} source={{ uri: `${s3Url}/${item?.imgUrl?.filename_disk}` }} />
                <View style={styles.right}>
                  <TextWithProtocolIcon textFontSize={pTd(16)} title={item?.title} url={item.url} />
                  <TextS style={FontStyles.font7} numberOfLines={1} ellipsizeMode="tail">
                    {item.description}
                  </TextS>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      ))} */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  wrap: {
    ...GStyles.paddingArg(8, 20),
    flex: 1,
  },
  header: {
    display: 'flex',
  },
  groupTitle: {
    marginBottom: pTd(8),
    marginTop: pTd(16),
  },
  itemsGroup: {
    borderRadius: pTd(6),
    backgroundColor: defaultColors.bg1,
    overflow: 'hidden',
  },
  itemWrap: {
    backgroundColor: defaultColors.bg1,
    display: 'flex',
    flexDirection: 'row',
    ...GStyles.paddingArg(16, 12),
    width: '100%',
  },
  image: {
    width: pTd(40),
    height: pTd(40),
    marginRight: pTd(16),
    borderRadius: pTd(20),
  },
  right: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});