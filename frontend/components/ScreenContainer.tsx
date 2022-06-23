import { AntDesign } from "@expo/vector-icons";
import { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import {
  Dimensions,
  FlatList,
  ImageBackground,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import Animated, { Layout } from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

import gearIcon from "../../assets/image/gear-icon.png";
import { DEVICE_HEIGHT, DEVICE_WIDTH, layout, text } from "../styles/styles";

import { Image, ShimmerPlaceHolder, ViewProps } from "./ThemedComponents";

export default function ScreenContainer({
  children,
  title,
  showOptions,
  showBackArrow,
  titleIsComponent,
  refreshCallback,
  offLoadRender = false,
  inBottomSheet,
  style,
  specialStyle,
  loading,
  RenderBottom,
  background,
  disableScroll,
}: {
  children: React.ReactElement[];
  titleIsComponent?: boolean;
  title?: React.ReactNode;
  showOptions?: boolean;
  showBackArrow?: boolean;
  refreshCallback?: () => Promise<any>;
  RenderBottom?: React.ComponentType;
  loading?: boolean;
  offLoadRender?: boolean;
  inBottomSheet?: boolean;
  specialStyle?: { [index: number]: ViewStyle };
  background?: any;
  disableScroll?: boolean;
} & ViewProps) {
  const nav = useNavigation();
  const [isRefreshing, setIsRefreshing] = React.useState(false);
  const [rendered, setRendered] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => setRendered(true), 1);
  }, []);

  children = children ?? [];

  const MyFlatList = React.useMemo(
    () => (inBottomSheet ? BottomSheetFlatList : FlatList),
    [inBottomSheet]
  );

  const MyView = React.useMemo(() => (inBottomSheet ? View : SafeAreaView), [
    inBottomSheet,
  ]);

  const RenderTitle = () => (
    <View style={[layout.row, { position: "relative", zIndex: 1, top: 0 }]}>
      {showBackArrow ? (
        <TouchableOpacity
          style={{
            position: "absolute",
            left: Dimensions.get("screen").width * 0.05,
            zIndex: 2,
          }}
          onPress={() => {
            nav.goBack();
          }}
        >
          <AntDesign name="left" size={24} color="black" />
        </TouchableOpacity>
      ) : null}

      {titleIsComponent ? (
        title
      ) : (
        <Text
          style={[
            text.h1,
            {
              marginLeft: "auto",
              marginRight: "auto",
              marginBottom: 15,
            },
          ]}
        >
          {title}
        </Text>
      )}
      {showOptions && false ? (
        <Image
          source={gearIcon}
          width={35}
          style={{ position: "absolute", right: 0 }}
        />
      ) : null}
    </View>
  );

  const EmptyPlaceHolder = () => (
    <ShimmerPlaceHolder
      shimmerStyle={{
        marginBottom: 20,
        borderRadius: layout.card.borderRadius,
        marginLeft: "auto",
        marginRight: "auto",
      }}
      shimmerWidthPercent={100}
      height={DEVICE_HEIGHT / 4}
      width={DEVICE_WIDTH * 0.9}
    />
  );

  const RenderItem = ({ item, index }) => (
    <Animated.View
      layout={Layout}
      key={`${title}-${index}`}
      style={[layout.outerContainer, specialStyle?.[index]]}
    >
      {item}
    </Animated.View>
  );

  const RenderFooter = () => (
    <View
      style={{
        height: Dimensions.get("screen").height * (inBottomSheet ? 0.3 : 0.2),
      }}
    />
  );

  return (
    <MyView style={style}>
      {background ? (
        <ImageBackground
          source={background}
          style={{
            width: DEVICE_WIDTH,
            height: DEVICE_HEIGHT,
            position: "absolute",
            top: 0,
            left: 0,
          }}
        />
      ) : null}
      <StatusBar translucent={false} barStyle="dark-content" />

      <MyFlatList
        data={!rendered ? [] : children.filter((c) => c !== null)}
        ListEmptyComponent={EmptyPlaceHolder}
        ListHeaderComponent={title ? RenderTitle : undefined}
        keyExtractor={(item, index) => `${title}-${index}`}
        ListFooterComponent={RenderBottom ? RenderBottom : RenderFooter}
        renderItem={RenderItem}
        style={{
          minHeight: Dimensions.get("screen").height,
          minWidth: Dimensions.get("screen").width,
        }}
        scrollEnabled={!disableScroll}
      />
    </MyView>
  );
}
