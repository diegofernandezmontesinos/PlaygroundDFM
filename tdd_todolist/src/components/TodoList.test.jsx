import { describe, it, expect } from 'vitest'
import { screen, render } from '@testing-library/react'
import TodoList from './TodoList'

const renderTodoList = () => {
    render(<TodoList />);
}

describe('todolist', () => {
    it('shoudl render the component',() =>  {
        renderTodoList()
        expect(screen.getByText(/Todo List/i)).toBeInTheDocument()
    })
})