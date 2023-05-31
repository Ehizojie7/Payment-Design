import React from 'react'

function Header() {
  return (
    <div className='header'>
      <div className='ace-coin'>
      <img className='wallet' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBCAMAAADQfiliAAAAe1BMVEUAAP////9cXP/V1f9+fv9zc/9nZ//Pz//7+//h4f/l5f8YGP/x8f+vr//Fxf+amv/39/+1tf/Kyv/q6v+/v/93d/+Cgv+Skv9hYf+Njf8zM/+Ghv8+Pv8jI/9MTP+np//c3P8qKv9HR/9ubv9XV/+iov+6uv9RUf85Of/EkPARAAADR0lEQVR4nO3c15qqMBQG0FCF0JsUQUAQef8nPIAOIGXGAjvnIv+tfrMXCUEl7EHMnpFMzrUMTxSPhqWry+9B+5Q2VVnX/CDK0ZCk1BwIgSTJbhqy8bh2n9jaWaDq6fGWK0u1fxLuJJCwrp2i3yr38TcWdPN9ukW/Hvdz8GYCqakdspfF+f4t1y0Ejq2dyvqN4x6H/UrQzLd1ij+r/JNY+kggmbJuhWWdfFe9TWS+K5Ac2/LF9+d7LfnksvSrwDxUfhBvcNzjJJPFsCJQOddgNy79okBSM13zLq9dXT6KIq8LmgkPg8uHi+xrAZcKl31G/SWBqX25xr8VcDVc/UWBC1l/ScDtfepNBbPVyO5XK6/PZVB4/PHkG1qlHzismubkosyg7Os6ipLk9eVcsmJTrKmVWq59yDB2HFU1pcnn0DzIeq9cEsXnW1+rOTCby2QZd8X+qrUiuK6PYdyNYTuE13spjF87rPcEYVutLtlgGMKmlKq2M7ZxrRXBqRVUILVWBHwrmH53AxV43SxkBAVCd9pFFbFpQOLj1L/wqVVVrqs3se85TMJ9mKyN3AZ3V4nnddsLgNJeUG6skGJigj6eQ1qAlJS0oBkGk7Tg/gMO7ffh/EJ44gJkERfEDmlB84lEWhCZpAXIJi4IiQtK4gKWCqiACqiACqiACqiAChYEJH83UgEVUAEZQVIYBj/bUoMTiNz91pkTkhFE+nATlTsTEERP+2vOmAAksJ9vZmNwwXF6P10DFkz3+xnGHJYEiKCYbyr4sAJjLqhgBdVcMGw1s6ggIsj6Zx3Yxz7TrtHmAns0BgCC+fN4o+UIIrjNBUNVEAFypwA8PPMAIzhPNzP54TUYwfSxSH30EpDgeWN7DAATIK//bFCfv6KACVAeHrCjYs6YPHAGJ2ii1AvP+YEKFkMFVEAF/4+A//tNVEAFVEAFVEAFVEAFVACc4M3uge2jIQemh2gtCkaMR1QQMIixiQrctpvoRBBQdP1MDmBD1ySJ/OjpIiZod5+6vjbgrq4+3Q3ne28fbGfbI/l99+nRXejAn47eY/+t77A88JCXpqToNyBHPZ6qbqVX3w+PPC8IgiiKAbtVguavFYLAtx1u/jW13NH/QvgH5EUzkKz2qwAAAAAASUVORK5CYII=" alt="" />
      <h2>AceCoin<span style={{color: 'grey'}}>Pay</span></h2>
      </div>
        
        <div class="watch">
  <span class="digit">0</span>
  <span class="digit">1</span>
  <span class="separator">:</span>
  <span class="digit">1</span>
  <span class="digit">9</span>
</div>

      </div>
  )
}

export default Header