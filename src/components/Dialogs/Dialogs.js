import styles from './Dialogs.module.css';
import Message from './Message/Message.js';
import Recipient from './Recipient/Recipient.js';
import AddMessageForm from "./AddMessageForm";

function Dialogs({ dialogs, addNewMessage }) {
    return (
        <section className={styles.dialogs}>
            <nav className={styles.dialogSelection}>
                <h3 className={styles.dialogsTitle}>Dialog</h3>
                <div className={styles.recipients}>
                    {dialogs.recipients.map(
                        recipient => <Recipient
                            key={recipient.id}
                            name={recipient.name}
                            id={recipient.id}
                        />
                    )
                    }
                </div>
            </nav>
            <div className={styles.messagesWindow}>
                <h3 className={styles.dialogsTitle}>Messages</h3>
                <div className={styles.messages}>
                    {dialogs.messages.map(message => <Message key={message.id} message={message.text}/>)}
                </div>
                <AddMessageForm onSubmit={({ message }) => addNewMessage(message)}/>
            </div>
        </section>
    );
}

export default Dialogs;