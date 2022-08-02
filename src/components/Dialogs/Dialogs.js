import styles from './Dialogs.module.css';
import Message from './Message/Message.js';
import Recipient from './Recipient/Recipient.js';
import { Redirect } from "react-router-dom";

function Dialogs(props) {

    const onChangeNewMessage = function (event) {
        props.changeNewMessage(event.currentTarget.value);
    };

    const onAddNewMessage = function () {
        props.addNewMessage();
    };

    const onEnter = function (event) {
        if (event.code === "Enter" && !event.repeat) {
            onAddNewMessage();
        }
    };

    if (!props.isAuth) {
        return <Redirect to="/login" />;
    }

    return (
        <section className={styles.dialogs}>
            <nav className={styles.dialogSelection}>
                <h3 className={styles.dialogsTitle}>Dialog</h3>
                <div className={styles.recipients}>
                    {props.dialogs.recipients.map(recipient => <Recipient key={recipient.id} name={recipient.name} id={recipient.id} />)}
                </div>
            </nav>
            <div className={styles.messagesWindow}>
                <h3 className={styles.dialogsTitle}>Messages</h3>
                <div className={styles.messages}>
                    {props.dialogs.messages.map(message => <Message key={message.id} message={message.text} />)}
                </div>
                <input
                    type="text"
                    value={props.dialogs.newMessageText}
                    onChange={onChangeNewMessage}
                    onKeyDown={onEnter}
                />
                <button onClick={onAddNewMessage}>Send Message</button>
            </div>
        </section>
    );
}

export default Dialogs;