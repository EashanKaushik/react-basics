import styles from './App.module.css';

export const Task = (props) => {
    return (
        <div key={props.nkey} className={props.value.completed ? styles.completedTask : styles.nonCompletedTask}>
            <h2 >
                {props.value.taskName}
                <button type='submit' onClick={() => props.removeTask(props.value.id)} className={styles.buttonX}>X</button>

                <button type='submit' onClick={() => props.completeTask(props.value.id)}>Completed</button>
            </h2>

        </div>

    );
}