/* fonts */
export const FontFamily = {
    textMdMedium: "Inter_medium",
    textXlSemibold: "Inter_semibold",
  };
  /* font sizes */
  export const FontSize = {
    textMdMedium_size: 16,
    textSmMedium_size: 14,
    textXlSemibold_size: 20,
    textXsSemibold_size: 12,
  };
  /* Colors */
  export const Color = {
    baseWhite: "#fff",
    grayCool50: "#f9f9fb",
    gray100: "#f2f4f7",
    gray600: "#475467",
    gray700: "#344054",
    grayCool800: "#30374f",
    grey800: "#2d3748",
    grayCool500: "#5d6b98",
    gray800: "#1d2939",
    grayCool900: "#111322",
    success500: "#12b76a",
  };
  /* Paddings */
  export const Padding = {
    p_base: 16,
    p_9xs: 4,
    p_11xs: 2,
  };
  /* border radiuses */
  export const Border = {
    br_base: 16,
    br_51xl: 70,
    br_181xl: 200,
  };
  const Example = () => {
    const myRef = React.useRef();
    const [bg, setBg] = React.useState("#fa000050");
    React.useEffect(() => {
      const styleObj = {
        backgroundColor: bg
      };
  
      if (Platform.OS !== "web") {
        // @ts-ignore
        myRef.current.setNativeProps({
          style: styleObj
        });
      } else {
        // @ts-ignore
        myRef.current.setNativeProps({
          style: styleObj
        });
      }
    }, [myRef, bg]);
    return <Box alignItems="flex-start">
        <Checkbox value="success" colorScheme="success" icon={<Icon as={MaterialCommunityIcons} name="bullseye" opacity={1} />} wrapperRef={myRef} onChange={state => {
        if (state) {
          setBg("#00de0050");
        } else {
          setBg("#fa000050");
        }
      }}>
          User Research & Analysis
        </Checkbox>
      </Box>;
  };
  const Example = () => {
    const myRef = React.useRef();
    const [bg, setBg] = React.useState("#fa000050");
    React.useEffect(() => {
      const styleObj = {
        backgroundColor: bg
      };
  
      if (Platform.OS !== "web") {
        // @ts-ignore
        myRef.current.setNativeProps({
          style: styleObj
        });
      } else {
        // @ts-ignore
        myRef.current.setNativeProps({
          style: styleObj
        });
      }
    }, [myRef, bg]);
    return <Box alignItems="flex-start">
        <Checkbox value="success" colorScheme="success" icon={<Icon as={MaterialCommunityIcons} name="bullseye" opacity={1} />} wrapperRef={myRef} onChange={state => {
        if (state) {
          setBg("#00de0050");
        } else {
          setBg("#fa000050");
        }
      }}>
          Black & White Wireframe
        </Checkbox>
      </Box>;
  };
  const Example = () => {
    const myRef = React.useRef();
    const [bg, setBg] = React.useState("#fa000050");
    React.useEffect(() => {
      const styleObj = {
        backgroundColor: bg
      };
  
      if (Platform.OS !== "web") {
        // @ts-ignore
        myRef.current.setNativeProps({
          style: styleObj
        });
      } else {
        // @ts-ignore
        myRef.current.setNativeProps({
          style: styleObj
        });
      }
    }, [myRef, bg]);
    return <Box alignItems="flex-start">
        <Checkbox value="success" colorScheme="success" icon={<Icon as={MaterialCommunityIcons} name="bullseye" opacity={1} />} wrapperRef={myRef} onChange={state => {
        if (state) {
          setBg("#00de0050");
        } else {
          setBg("#fa000050");
        }
      }}>
          Design on Figma
        </Checkbox>
      </Box>;
  };
  const Example = () => {
    const [textAreaValue, setTextAreaValue] = useState("Value Controlled");
    return <Box alignItems="center" w="100%">
        <TextArea value={textAreaValue} onChange={e => setTextAreaValue(e.currentTarget.value)} // for web
      onChangeText={text => setTextAreaValue(text)} // for android and ios
      w="75%" maxW="300" />
      </Box>;
  };