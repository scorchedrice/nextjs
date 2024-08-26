export default function LogoutButton() {
    const me :{id: string, nickname: string} = {
        id: 'jwoong297',
        nickname: 'scorchedrice'
    }

    const onLogout = () => {};

    return (
        <button>
            <h2>This is Logout Btn</h2>
            <div>{me.nickname}</div>
            <div>@{me.id}</div>
        </button>
    )
}