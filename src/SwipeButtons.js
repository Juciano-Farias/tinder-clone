import React from 'react'
import './SwipeButtons.css'

import { Replay } from '@mui/icons-material'
import { Close } from '@mui/icons-material'
import { StarRateRounded } from '@mui/icons-material'
import { Favorite } from '@mui/icons-material'
import { FlashOnRounded } from '@mui/icons-material'
import { IconButton } from '@mui/material'

function SwipeButtons() {
    return (
        <div className='swipeButtons'>
            <IconButton className='swipeButtons__reapet'>
                <Replay fontSize='large'/>
            </IconButton>
            <IconButton className='swipeButtons__left'>
                <Close fontSize='large'/>
            </IconButton>
            <IconButton className='swipeButtons__star'>
                <StarRateRounded fontSize='large'/>
            </IconButton>
            <IconButton className='swipeButtons__right'>
                <Favorite fontSize='large'/>
            </IconButton>
            <IconButton className='swipeButtons__lightning'>
                <FlashOnRounded fontSize='large'/>
            </IconButton>
        </div>
    )
}

export default SwipeButtons
