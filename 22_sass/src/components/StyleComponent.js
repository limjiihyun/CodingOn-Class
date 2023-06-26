import styled from "styled-components";

const Origin = styled.div`
  display: flex;
`;

const Font = styled.span`
  font-size: 30px;
`;

const Box = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.bgColor};
  ${Font} {
    &:hover {
      font-size: 60px;
    }
  }
  //pseudo
  span {
    font-size: 10px;
    &:hover {
      font-size: 60px;
    }
  }
`;

const Circle = styled(Box)`
  border-radius: 50px;
`;

const Btn = styled.button`
  color: white;
  background-color: indigo;
  border-radius: 10px;
`;

const Input = styled.input.attrs({ required: true, disabled: true })`
  padding: 10px;
  background-color: aqua;
`;

// const Box2 = styled.div`
//   width: 100px;
//   height: 100px;
//   background-color: orange;
// `;

// const Box3 = styled.div`
//   width: 100px;
//   height: 100px;
//   background-color: yellow;
// `;

const Text = styled.p`
  color: white;
  text-align: center;
`;

const StyledComponent = () => {
  return (
    <>
      <Origin>
        <Box bgColor="red">
          <Text>Hello</Text>
        </Box>
        <Box bgColor="orange">
          <Font>Bye</Font>
        </Box>
        <Box bgColor="blue">
          <Font>Good</Font>
        </Box>
        <Circle bgColor="purple" />
      </Origin>
      <Btn>버튼입니다</Btn>
      <Btn as="a" href="https://www.naver.com">
        앵커태그입니다
      </Btn>
      <div>
        <Input />
        <Input />
        <Input />
        <Input />
      </div>
    </>
  );
};

export default StyledComponent;