<template>
    <article>
        <div>
            <img src="../assets/images/icon-success-check.svg" alt="">
            <h2>Message Sent!</h2>
        </div>
        <p>Thanks for completing the form. We'll be in touch soon!</p>
    </article>
</template>

<style scoped lang="scss">
    @use '../scss/var' as v;

    @keyframes move-in {
        from {
            top: -100vh;
        }
        to {
            top: 24px
        }
    }
    @keyframes shake {
        0% {
            transform: rotate(5deg);
        }
        50% {
            transform: rotate(-5deg);
        }
        100% {
            transform: rotate(0deg);
        }
    }
    @keyframes move-out {
        from {
            top: 24px
        }
        to {
            top: -100vh;
        }
    }

    article {
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: fixed;
        width: clamp(300px, 92%, 450px);
        height: 108px;
        padding: 1.6rem;
        border-radius: 0.75rem;
        gap: 1rem;
        background: linear-gradient(180deg, v.$grey-950 0%, v.$green-600 100%);
        box-shadow: v.$shadow-sm;

        animation: 
            move-in 1.5s cubic-bezier(0.3,-0.5,0.5,1.5) forwards, 
            move-out 1.5s cubic-bezier(0.3,-0.5,0.5,1.5) 5s forwards;        
        div {
            display: flex;
            h2 {
                margin-left: 0.5rem;
                font-size: 1.125rem;
                color: v.$white;
            }
        }
        p {
            font-size: 1rem;
            letter-spacing: 0.025rem;
            color: v.$white;
        }
    }
</style>