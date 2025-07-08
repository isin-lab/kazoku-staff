import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import LOGO from '../zvonokLogo.svg'
import { FaBell } from 'react-icons/fa'

const AuthScreen = () => {
	const [clickCount, setClickCount] = useState(0)
	const [showShield, setShowShield] = useState(true) // Добавляем состояние для управления видимостью
	const navigate = useNavigate()

	useEffect(() => {
		const isAuthenticated = localStorage.getItem('zvonok_authenticated')
		if (isAuthenticated) {
			setShowShield(false)
			navigate('/zvonok-staff')
		}
	}, [navigate])

	const handleBellClick = () => {
		const newClickCount = clickCount + 1
		setClickCount(newClickCount)

		if (newClickCount >= 2) {
			localStorage.setItem('zvonok_authenticated', 'true')
			setShowShield(false) // Скрываем shield перед навигацией
			navigate('/zvonok-staff')
			localStorage.removeItem('zvonok_authenticated') // Удалите эту строку!
		}

		setTimeout(() => {
			if (newClickCount === clickCount) {
				setClickCount(0)
			}
		}, 1000)
	}


	if (!showShield) return null // Не рендерим shield если showShield false

	return (
		<div className='shield'>
			<img
				className='shieldLogo'
				src={LOGO}
				alt='ЗВОНОК'
				style={{
					transform: `scale(${clickCount === 1 ? 1.05 : 1})`,
					transition: 'transform 0.3s ease',
				}}
			/>
			<FaBell
				style={{
					color: 'white',
					fontSize: '40px',
					cursor: 'pointer',
					transform: clickCount === 1 ? 'rotate(15deg)' : 'rotate(0)',
					transition: 'transform 0.3s ease',
				}}
				onClick={handleBellClick}
			/>
		</div>
	)
}

export default AuthScreen
