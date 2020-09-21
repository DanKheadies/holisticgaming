export const SEND_CONTACT_EMAIL = 'SEND_CONTACT_EMAIL';

export const sendContactEmail = (emailContent) => {
    return async () => {
        let submission = {
            succeeded: false,
            errors: []
        };

        await fetch('https://truthorelaboratelie.com/api/holisticgaming/contact-form.php', {
            method: "POST",
            body: JSON.stringify(emailContent),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then(
            (response) => (response.json())
        ).then((response)=>{
            if (response.status === 'success') {
                submission = {
                    succeeded: true
                }
            } else if (response.status === 'fail') {
                submission = {
                    errors: response.error
                }
            }
        });

        return submission;
    }
};