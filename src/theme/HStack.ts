import styled, { css } from "styled-components";

const HStack = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
`;

HStack.displayName = "VStack";

export default HStack;
