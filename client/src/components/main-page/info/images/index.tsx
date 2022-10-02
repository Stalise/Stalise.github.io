import { FC, useMemo, useState } from 'react';
import LightBox from 'fslightbox-react';

import { useAppSelector } from 'hooks/redux';
import { getImagesUrls } from 'utils';

import { Add } from './add';
import { Item } from './item';

import s from './style.module.scss';

export const Images: FC = () => {
   const photos = useAppSelector(state => state.photosSlice.photos.filter((_, index) => index < 4));

   const [lightboxController, setLightboxController] = useState({
      toggler: false,
      slide: 1,
   });

   const urls = useMemo(() => (
      getImagesUrls(photos)
   ), [photos]);

   const lightboxHandler = (index: number) => {
      setLightboxController({
         toggler: !lightboxController.toggler,
         slide: index,
      });
   };

   return (
      <div className={ s.wrapper }>

         { photos.length > 0 &&
            <div className={ s.container }>
               { photos.map((elem, index) => (
                  <Item
                     url={ elem.img }
                     index={ index + 1 }
                     lightboxHandler={ lightboxHandler }
                     key={ elem.id }/>
               )) }
            </div>
         }

         <Add />

         <LightBox
            toggler={ lightboxController.toggler }
            sources={ urls }
            slide={ lightboxController.slide }
         />
      </div>
   );
};
