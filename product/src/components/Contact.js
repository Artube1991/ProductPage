const Contact = () => {
    return(
        <>
        <h2>This pet project was powered and designed by Aleksei Ivanov.</h2>
        <p>See the code <a href="https://github.com/Artube1991/ProductPage">here</a>.</p>
        <p>You can contact me by the links below:</p>
            <div className="contact-item">
            <a href="https://www.facebook.com/thekeyskeeper/" target="_blank"><img src="./media/facebook.png" alt="Facebook logo" className="networks-icons"/></a>
                <a href="https://www.facebook.com/thekeyskeeper/" target="_blank">Facebook;</a>
                </div>
            <div className="contact-item">
            <a href="https://t.me/artube1991" target="_blank"><img src="./media/telegram.png" alt="Telegram logo" className="networks-icons"/></a>
                <a href="https://t.me/artube1991" target="_blank">Telegram;</a>
            </div>
        <p>Or send a letter to <strong>artube1991@gmail.com</strong>.</p>
        <p>If you want to learn more about the "Keys" ("Ключи") literature club (by the way, it actually exists) or visit its real web store, please follow the</p>
        <div className="contact-item">
            <a href="https://vk.com/keys_the_club" target="_blank"><img src="./media/VK.png" alt="VK logo" className="networks-icons" /></a>
            <a href="https://vk.com/keys_the_club" target="_blank">official VK page link.</a>
        </div>
        </>
    )
};

export default Contact;