import React from 'react'
import Style from './Home.module.scss'
import me from '../../img/self.jfif'
import classNames from 'classnames'
import EmojiBullet from './EmojiBullet'
import SocialIcon from './SocialIcon'
import { Box } from '@mui/material'
import { info } from '../../info/Info'
import ThreeDBoxes from '../3d/ThreeDBoxes'
import ParticleAcellerator from '../ParticleAccellerator'

export default function Home() {
  return (
    <>
      <Box
        component={'main'}
        display={'flex'}
        flexDirection={{ xs: 'column', md: 'column' }}
        alignItems={'center'}
        justifyContent={'center'}
        minHeight={'calc(100vh - 175px)'}
        style={{ position: 'relative', zIndex: '1' }}
      >
        <div
          id="leftright"
          style={{
            display: 'flex',
            flexDirection: 'row',
            position: 'relative',
            zIndex: '5',
          }}
        >
          <div id={'left side'}>
            <Box
              className={classNames((Style.avatar, Style.shadowed))}
              alt={'image of developer'}
              style={{ background: info.gradient, zIndex: 10 }}
              component={'img'}
              src={me}
              width={{ xs: '35vh', md: '40vh' }}
              height={{ xs: '35vh', md: '40vh' }}
              borderRadius={'50%'}
              p={'0.75rem'}
              mb={{ xs: '1rem', sm: 0 }}
              mr={{ xs: 0, md: '2rem' }}
            />
          </div>
          <div id={'right side'} style={{ marginTop: '2rem' }}>
            <Box>
              <h1>
                Hi, I'm {info.firstName}
                <span
                  style={{
                    background: info.gradient,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                ></span>
                <span className={Style.hand}>🚀</span>
              </h1>
              <h2>I'm {info.position}.</h2>
              <Box component={'ul'} p={'0.8rem'}>
                {info.miniBio.map((bio, index) => (
                  <EmojiBullet key={index} emoji={bio.emoji} text={bio.text} />
                ))}
              </Box>
              <Box
                display={'flex'}
                gap={'1.5rem'}
                justifyContent={'center'}
                fontSize={{ xs: '2rem', md: '2.5rem' }}
              >
                {info.socials.map((social, index) => (
                  <SocialIcon
                    key={index}
                    link={social.link}
                    icon={social.icon}
                    label={social.label}
                  />
                ))}
              </Box>
            </Box>
          </div>
        </div>
        {/*  <Box
          style={{
            width: '100%',
            height: '40vh',
            position: 'relative',
            zIndex: '5',
          }}
        >
          <ThreeDBoxes />
        </Box> */}
        <div style={{ position: 'fixed', zIndex: '0' }}>
          <ParticleAcellerator />
        </div>
      </Box>
    </>
  )
}
