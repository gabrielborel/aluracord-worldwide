import styles from './BotaoSticker.module.css'
import appConfig from '../../../../../config.json'
import Image from 'next/image'
import { useState } from 'react'

interface Props {
  onStickerClick: (sticker: string) => void
}

export default function BotaoSticker({ onStickerClick }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <div className={styles.botao}>
      {!isOpen ? (
        <button className={styles.botaoSticker} onClick={() => setIsOpen(!isOpen)}>
          😋
        </button>
      ) : (
        <button className={styles.botaoStickerAtivo} onClick={() => setIsOpen(!isOpen)}>
          😋
        </button>
      )}
      {isOpen && (
        <div className={styles.stickerModal}>
          <p className={styles.title}>Stickers</p>
          <ul className={styles.stickerList} onClick={() => setIsOpen(false)}>
            {appConfig.stickers.map((sticker) => (
              <li
                key={sticker}
                className={styles.stickerItem}
                onClick={() => {
                  onStickerClick(sticker)
                }}
              >
                <Image className={styles.sticker} src={sticker} alt='sticker' width='100%' height='100%' />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
