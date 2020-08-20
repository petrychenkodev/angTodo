import { Category } from '../model/Category';
import { title } from 'process';
import { Priority } from '../model/Priority';
import { Task } from '../model/Task';

export class TestData {
    static categories: Category[] = [
        {id: 1, title: 'Работа'},
        {id: 2, title: 'Семья'},
        {id: 3, title: 'Учеба'},
        {id: 4, title: 'Отдых'},
        {id: 5, title: 'Спорт'},
        {id: 6, title: 'Еда'},
        {id: 7, title: 'Финансы'}
    ];
    static priorities: Priority[] = [
        {id: 1, title: 'Низкий', color: 'e5e5e5'},
        {id: 2, title: 'Средний', color: '85d1b2'},
        {id: 3, title: 'Высокий', color: 'f1828d'},
        {id: 4, title: 'Очень срочно!', color: 'f1128d'},
    ];
    static tasks: Task[] = [
        {
            id: 1,
            title: 'task 1',
            priority: TestData.priorities[0],
            completed: false,
            category: TestData.categories[7],
            date: new Date('2020-10-10')
        },
        {
            id: 2,
            title: 'task 2',
            priority: TestData.priorities[0],
            completed: false,
            category: TestData.categories[5],
            date: new Date('2020-10-10')
        },
        {
            id: 3,
            title: 'task 3',
            priority: TestData.priorities[0],
            completed: false,
            category: TestData.categories[1],
            date: new Date('2020-10-10')
        }
    ];
}
