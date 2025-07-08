import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'

const DishCard = ({
	dish,
	isExpanded: initialExpanded = false,
	isSearchResult = false,
}) => {
	const [isExpanded, setIsExpanded] = useState(initialExpanded)
	const [portionMultiplier, setPortionMultiplier] = useState(1)

	const handleMultiplierChange = e => {
		const value = parseInt(e.target.value) || 1
		setPortionMultiplier(Math.max(1, Math.min(20, value)))
	}

	return (
		<div
			className={`dish-card ${isExpanded ? 'expanded' : 'collapsed'} ${
				isSearchResult ? 'search-result' : ''
			}`}
		>
			<div className='dish-header' onClick={() => setIsExpanded(!isExpanded)}>
				<div className='dish-title-row'>
					<h3 className='dish-name'>{dish.name}</h3>
					<span className='toggle-icon'>
						{isExpanded ? <FiChevronUp /> : <FiChevronDown />}
					</span>
				</div>

				{isExpanded && (
					<div className='portion-control-wrapper'>
						<span className='portion-label'>Порций:</span>
						<div className='portion-control'>
							<button
								className='portion-btn decrement'
								onClick={e => {
									e.stopPropagation()
									setPortionMultiplier(prev => Math.max(1, prev - 1))
								}}
								disabled={portionMultiplier <= 1}
							>
								−
							</button>
							<input
								type='number'
								min='1'
								max='20'
								value={portionMultiplier}
								onChange={handleMultiplierChange}
								className='portion-input'
								onClick={e => e.stopPropagation()}
							/>
							<button
								className='portion-btn increment'
								onClick={e => {
									e.stopPropagation()
									setPortionMultiplier(prev => Math.min(20, prev + 1))
								}}
								disabled={portionMultiplier >= 20}
							>
								+
							</button>
						</div>
					</div>
				)}
			</div>

			{isExpanded && (
				<div className='dish-content'>
					{dish.image && (
						<img
							src={dish.image}
							alt={dish.name}
							className='dish-image'
							style={{ maxWidth: '100%' }}
						/>
					)}

					<div className='ingredients-container'>
						{dish.ingredients.map((ingredient, index) => (
							<div key={index} className='ingredient-row'>
								<span className='ingredient-name'>
									{ingredient.isDish ? (
										<Link
											to={`/dish/${ingredient.dishId}`}
											className='dish-link'
										>
											{ingredient.name}
										</Link>
									) : (
										ingredient.name
									)}
								</span>
								<span className='ingredient-weight'>
									{ingredient.weight * portionMultiplier}{' '}
									{ingredient.unit || 'гр'}
								</span>
							</div>
						))}
					</div>

					{dish.preparation && (
						<div className='preparation'>
							<h4>Приготовление:</h4>
							<p>{dish.preparation}</p>
						</div>
					)}
				</div>
			)}
		</div>
	)
}

export default DishCard
