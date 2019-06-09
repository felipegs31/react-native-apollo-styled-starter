import styled from 'styled-components/native';
import theme from 'styled-theming';

export const Container = styled.View`
  flex: 1;
  background: ${props => props.theme.background};
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  color: ${props => props.theme.textPrimary};
  font-size: 20px;
`;
