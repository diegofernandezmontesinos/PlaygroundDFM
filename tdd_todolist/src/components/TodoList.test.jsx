import { describe, it, expect, vi } from 'vitest'
import { screen, render, fireEvent } from '@testing-library/react'
import TodoList from './TodoList'

const renderTodoList = () => {
    render(<TodoList />);
}

describe('todolist', () => {
    it('shoudl render the component',() =>  {
        renderTodoList()
        expect(screen.getByText(/Todo List/i)).toBeInTheDocument()
    })

    it('should have an input', () => {
        renderTodoList()
        expect(screen.getByPlaceholderText('Add a task')).toBeInTheDocument()
        expect(screen.getByText('Add')).toBeInTheDocument()
    })

    it('should add a task after click on "add" button', () => {
        renderTodoList()
        const input = screen.getByPlaceholderText('Add a task')
        const button = screen.getByText('Add')
        fireEvent.change(input, {target: {value: 'New Task'}})
        fireEvent.click(button)
        expect(screen.getByText('New Task')).toBeInTheDocument()
    })

    it('should mark a task as complete', () => {
        renderTodoList()
        const input = screen.getByPlaceholderText('Add a task')
        const button = screen.getByText('Add')
        fireEvent.change(input, {target: {value: 'New Task'}})
        fireEvent.click(button)
        const completeButton = screen.getByText('Complete')
        fireEvent.click(completeButton)
        expect(screen.getByText('New Task')).toHaveStyle('text-decoration: line-through')
    })

    it('should delete a task', () => {
        renderTodoList()
        const input = screen.getByPlaceholderText('Add a task');
        const button = screen.getByText('Add');
        fireEvent.change(input, { target: { value: 'New Task' } });
        fireEvent.click(button);
        const deleteButton = screen.getByText('Delete');
        fireEvent.click(deleteButton);
        expect(screen.queryByText('New Task')).not.toBeInTheDocument();
      });

    it('should show the pendings task', () => {
        renderTodoList()
        const input = screen.getByPlaceholderText('Add a task');
        const button = screen.getByText('Add');
        fireEvent.change(input, { target: { value: 'Task 1' } });
        fireEvent.click(button);
        fireEvent.change(input, { target: { value: 'Task 2' } });
        fireEvent.click(button);
        const completeButton = screen.getAllByText('Complete')[0];
        fireEvent.click(completeButton);
        expect(screen.getByText('Pending Tasks: 1')).toBeInTheDocument();
    });

    it('should edit a task', () => {
        renderTodoList()
        const input = screen.getByPlaceholderText('Add a task');
        const addButton = screen.getByText('Add');
        fireEvent.change(input, { target: { value: 'Task to edit' } });
        fireEvent.click(addButton);

        const editButton = screen.getByText('Edit a task');
        globalThis.prompt = vi.fn(() => 'Task edited')
        fireEvent.click(editButton)

        expect(screen.getByText(/Task edited/i)).toBeInTheDocument()
    })
})