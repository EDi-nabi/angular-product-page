import { Product } from '../models/product.model';

// define require: any;

const m_80085_gray              = '../../../assets/images/80085-m-gray.png';
const m_80085_olive             = '../../../assets/images/80085-m-olive.png';
const m_80085_red               = '../../../assets/images/80085-m-red.png';
const m_baboon_blue             = '../../../assets/images/baboon-m-blue.png';
const m_baboon_green            = '../../../assets/images/baboon-m-green.png';
const m_baboon_smoke            = '../../../assets/images/baboon-m-smoke.png';
const w_i_love_u_black          = '../../../assets/images/i-love-u-w-black.png';
const w_i_love_u_pink           = '../../../assets/images/i-love-u-w-pink.png';
const w_i_love_u_white          = '../../../assets/images/i-love-u-w-white.png';
const m_lover_blue              = '../../../assets/images/lover-m-blue.png';
const m_lover_orange            = '../../../assets/images/lover-m-orange.png';
const m_lover_red               = '../../../assets/images/lover-m-red.png';
const w_my_vibe_my_tribe_brown  = '../../../assets/images/my-vibe-my-tribe-w-brown.png';
const w_my_vibe_my_tribe_gray   = '../../../assets/images/my-vibe-my-tribe-w-gray.png';
const w_my_vibe_my_tribe_yellow = '../../../assets/images/my-vibe-my-tribe-w-yellow.png';
const w_white_widow_black       = '../../../assets/images/white-widow-w-black.png';
const w_white_widow_pink        = '../../../assets/images/white-widow-w-pink.png';
const w_white_widow_white       = '../../../assets/images/white-widow-w-white.png';

export const ProductListData = [
  new Product(1, 'Product 1', 'P1 Lorem ipsum dolor sit amet.', 12.3,
    [
      { color: 'gray', size:   'XS', code: 'P1XSBLUE', image:   m_80085_gray },
      { color: 'olive', size: 'XS', code: 'P1XSORANGE', image: m_80085_olive },
      { color: 'red', size: 'XS', code: 'P1XSPURPLE', image: m_80085_red },
      { color: 'gray', size:   'S', code:  'P1SBLUE', image:    m_80085_gray },
      { color: 'orange', size: 'S', code:  'P1SORANGE', image:  m_80085_olive },
      { color: 'purple', size: 'S', code:  'P1SPURPLE', image:  m_80085_red },
      { color: 'gray', size:   'M', code:  'P1MBLUE', image:    m_80085_gray },
      { color: 'orange', size: 'M', code:  'P1MORANGE', image:  m_80085_olive },
      { color: 'purple', size: 'M', code:  'P1MPURPLE', image:  m_80085_red },
      { color: 'gray', size:   'L', code:  'P1LBLUE', image:    m_80085_gray },
      { color: 'orange', size: 'L', code:  'P1LORANGE', image:  m_80085_olive },
      { color: 'purple', size: 'L', code:  'P1LPURPLE', image:  m_80085_red },
      { color: 'gray', size:   'XL', code: 'P1XLBLUE', image:   m_80085_gray },
      { color: 'olive', size: 'XL', code: 'P1XLORANGE', image: m_80085_olive },
      { color: 'red', size: 'XL', code: 'P1XLPURPLE', image: m_80085_red },
    ],
    [
      { name: 'Alfred', content: 'Lorem ipsum dolor sit amet...' }
    ]
  ),
  new Product(2, 'Product 2', 'P2 Lorem ipsum dolor sit amet.', 13.4,
    [
      { color: 'green', size: 'XS', code: 'P2XSGREEN', image: m_baboon_blue },
      { color: 'purple', size: 'XS', code: 'P2XSPURPLE', image: m_baboon_green },
      { color: 'red', size: 'XS', code: 'P2XSRED', image: m_baboon_smoke },
      { color: 'green', size: 'XL', code: 'P2XLGREEN', image: m_baboon_blue },
      { color: 'purple', size: 'XL', code: 'P2XLPURPLE', image: m_baboon_green },
      { color: 'red', size: 'XL', code: 'P2XLRED', image: m_baboon_smoke },
    ],
    [
      { name: 'Romuald', content: 'Nie wszystko złoto, co się święci.' }
    ]
  ),
  new Product(3, 'Product 3', 'P3 Lorem ipsum dolor sit amet.', 14.5,
    [
      { color: 'orange', size: 'XS', code: 'P3XSORANGE', image: w_i_love_u_black },
      { color: 'blue', size: 'XS', code: 'P3XSBLUE', image: w_i_love_u_pink },
      { color: 'orange', size: 'S', code: 'P3SORANGE', image: w_i_love_u_black },
      { color: 'blue', size: 'S', code: 'P3SBLUE', image: w_i_love_u_pink },
      { color: 'orange', size: 'M', code: 'P3MORANGE', image: w_i_love_u_black },
      { color: 'blue', size: 'M', code: 'P3MBLUE', image: w_i_love_u_pink },
      { color: 'orange', size: 'L', code: 'P3LORANGE', image: w_i_love_u_black },
      { color: 'blue', size: 'L', code: 'P3LBLUE', image: w_i_love_u_pink },
      { color: 'orange', size: 'XL', code: 'P3XLORANGE', image: w_i_love_u_black },
      { color: 'blue', size: 'XL', code: 'P3XLBLUE', image: w_i_love_u_pink },
    ],
    [
      { name: 'AntekPL', content: 'Kupiłem takie Misiowi. Bardzo ładnie na nim leży.' }
    ]
  ),
  new Product(4, 'Product 4', 'P4 Lorem ipsum dolor sit amet.', 15.6,
    [
      { color: 'blue', size: 'XS', code: 'P5XSBLACK', image: m_lover_blue },
      { color: 'orange', size: 'XS', code: 'P5XSBLUE', image: m_lover_orange },
      { color: 'red', size: 'XS', code: 'P5XSGREEN', image: m_lover_red },
      { color: 'blue', size: 'S', code: 'P5SBLACK', image: m_lover_blue },
      { color: 'orange', size: 'S', code: 'P5SBLUE', image: m_lover_orange },
      { color: 'red', size: 'S', code: 'P5SGREEN', image: m_lover_red },
      { color: 'blue', size: 'M', code: 'P5MBLACK', image: m_lover_blue },
      { color: 'orange', size: 'M', code: 'P5MBLUE', image: m_lover_orange },
      { color: 'red', size: 'M', code: 'P5MGREEN', image: m_lover_red },
      { color: 'blue', size: 'L', code: 'P5LBLACK', image: m_lover_blue },
      { color: 'orange', size: 'L', code: 'P5LBLUE', image: m_lover_orange },
      { color: 'red', size: 'L', code: 'P5LGREEN', image: m_lover_red },
      { color: 'blue', size: 'XL', code: 'P5XLBLACK', image: m_lover_blue },
      { color: 'orange', size: 'XL', code: 'P5XLBLUE', image: m_lover_orange },
      { color: 'red', size: 'XL', code: 'P5XLGREEN', image: m_lover_red },
    ],
    [
      { name: 'Janusz', content: 'Pierwszy!!!1!1jeden!' }
    ]
  ),
  new Product(5, 'Product 5', 'P5 Lorem ipsum dolor sit amet.', 16.7,
    [
      { color: 'purple', size: 'XS', code: 'P5XSPURPLE', image: w_my_vibe_my_tribe_brown },
      { color: 'blue', size: 'XS', code: 'P5XSBLUE', image: w_my_vibe_my_tribe_gray },
      { color: 'orange', size: 'XS', code: 'P5XSORANGE', image: w_my_vibe_my_tribe_yellow },
      { color: 'purple', size: 'S', code: 'P5SPURPLE', image: w_my_vibe_my_tribe_brown },
      { color: 'blue', size: 'S', code: 'P5SBLUE', image: w_my_vibe_my_tribe_gray },
      { color: 'orange', size: 'S', code: 'P5SORANGE', image: w_my_vibe_my_tribe_yellow },
      { color: 'purple', size: 'M', code: 'P5MPURPLE', image: w_my_vibe_my_tribe_brown },
      { color: 'blue', size: 'M', code: 'P5MBLUE', image: w_my_vibe_my_tribe_gray },
      { color: 'orange', size: 'M', code: 'P5MORANGE', image: w_my_vibe_my_tribe_yellow },
      { color: 'purple', size: 'L', code: 'P5LPURPLE', image: w_my_vibe_my_tribe_brown },
      { color: 'blue', size: 'L', code: 'P5LBLUE', image: w_my_vibe_my_tribe_gray },
      { color: 'orange', size: 'L', code: 'P5LORANGE', image: w_my_vibe_my_tribe_yellow },
      { color: 'purple', size: 'XL', code: 'P5XLPURPLE', image: w_my_vibe_my_tribe_brown },
      { color: 'blue', size: 'XL', code: 'P5XLBLUE', image: w_my_vibe_my_tribe_gray },
      { color: 'orange', size: 'XL', code: 'P5XLORANGE', image: w_my_vibe_my_tribe_yellow },
    ],
    [
      { name: 'Grażynka555', content: 'Ale kiecka!! Janiemoge!!! Krycha, ho no zobacz!!!!' }
    ]
  ),
];

