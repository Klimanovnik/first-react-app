import styles from './Dialogs.module.css';
import Message from './Message/Message.js';
import Recipient from './Recipient/Recipient.js';

function Dialogs() {

    const recipientData = [
        { id: 1, name: "Dima" },
        { id: 2, name: "Mike" },
        { id: 3, name: "Fedor" },
        { id: 4, name: "Slava" }
    ];

    const messageData = [
        { id: 1, text: "Hello" },
        { id: 2, text: "Yo" },
        { id: 3, text: "How are you ?" },
        { id: 4, text: "I'am OK" }
    ];

    return (
        <section className={styles.dialogs}>
            <nav className={styles.dialogSelection}>
                <h3 className={styles.dialogsTitle}>Dialog</h3>
                <div className={styles.recipients}>
                    {recipientData.map(recipient => <Recipient key={recipient.id} name={recipient.name} id={recipient.id} />)}
                </div>
            </nav>
            <div className={styles.messagesWindow}>
                <h3 className={styles.dialogsTitle}>Messages</h3>
                <div className={styles.messages}>
                    {messageData.map(message => <Message key={message.id} message={message.text} />)}
                </div>
            </div>
        </section>
    );
}

export default Dialogs;