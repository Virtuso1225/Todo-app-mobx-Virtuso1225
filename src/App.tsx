import React from 'react';
import TodoInsert from './components/TodoInsert/TodoInsert';
import TodoList from './components/TodoList/TodoList';
import {
  Title,
  TitleContainer,
  TodoContainer,
  TodoWrapper,
} from './TodoTemplate/TodoTemplateStyle';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function App() {
  return (
    <div>
      <TodoWrapper>
        <TodoContainer>
          <TitleContainer>
            <Title>Todo App</Title>
          </TitleContainer>
          <TodoInsert />
          <TodoList />
        </TodoContainer>
      </TodoWrapper>
    </div>
  );
}
export default App;
