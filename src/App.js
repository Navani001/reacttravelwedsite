import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
function App() {
  return (
 <div>

<nav class="flex">
    <figure class="logo"><img src="assets/images/logo.png" alt="LOGO." /></figure>
    <a href="javascript:void(0)" class="ham" onclick="closer()">
    </a>
</nav>


<menu>
    <section class="details padding_1x">
        <a href="javascript:void(0)"><iconify-icon icon="iconoir:phone"></iconify-icon> (+000) 123 4567</a>
        <a href="mailto:info@websitename.com"><iconify-icon icon="mdi:email-outline"></iconify-icon> info@websitename.com</a>
        <a href="javascript:void(0)"><iconify-icon icon="entypo:address"></iconify-icon> 24971 Avenue Stanford, Santa Clarita, CA 91355</a>
        <a href="javascript:void(0)"><iconify-icon icon="ri:time-line"></iconify-icon> Every day, 6am - 6pm</a>
    </section>
    <section class="links padding_1x">
        <a href="#">Home</a>
        <a href="#">Recycling</a>
        <a href="#">Contact us</a>
        <a href="#">About us</a>
    </section>
</menu>

<header>
    <article>
        <h1 class="title big"> <em>Chic</em> & <em>Unique</em> Pieces For Your Home<em>.</em> </h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        <a href="#More" class="btn btn_3">Explore more</a>
    </article>
</header>

<main id="More">

    <div class="divisions division_1 flex padding_2x">
        <section class="flex_content padding_2x">
            <figure>
                <img src="https://i.postimg.cc/qqt4ntzz/01.jpg" alt="" loading="lazy" />
            </figure>
        </section>
        <section class="flex_content padding_2x">
            <article>
                <h2 class="title medium">Let's make your Interior better.</h2>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
                <aside class="fixed_flex">
                    <span>
                        <h4 class="title small">200+</h4>
                        <p>New Furnitures</p>
                    </span>
                    <span>
                        <h4 class="title small">100+</h4>
                        <p>Recycled Products</p>
                    </span>
                </aside>
            </article>
        </section>
    </div>

    <div class="divisions division_2 flex padding_2x">
        <section class="flex_content padding_2x">
            <figure>
                <img src="https://i.postimg.cc/XvVWL1rM/div-2.jpg" alt="" loading="lazy" />
                <figcaption class="padding_1x">
                    <h2 class="title medium">What We Do?</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </figcaption>
            </figure>
        </section>
        <section class="flex_content cards padding_2x flex">
            <figure class="flex card">
                <img src="https://i.postimg.cc/g2ydvbkq/01.jpg" alt="" loading="lazy" />
                <figcaption class="padding_2x">
                    <h3 class="title small">Indoor & Outdoor Furniture</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </figcaption>
            </figure>
            <figure class="flex card">
                <figcaption class="padding_2x">
                    <h3 class="title small">Large contracts for Doors</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </figcaption>
                <img src="https://i.postimg.cc/FsLhHJM6/02.jpg" alt="" loading="lazy" />
            </figure>
            <figure class="flex card">
                <img src="https://i.postimg.cc/y65VKTb9/03.jpg" alt="" loading="lazy" />
                <figcaption class="padding_2x">
                    <h3 class="title small">Kitchen, Bed room sets</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </figcaption>
            </figure>
            <figure class="flex card">
                <figcaption class="padding_2x">
                    <h3 class="title small">Exibition Stands</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </figcaption>
                <img src="https://i.postimg.cc/j2GKhs7v/04.jpg" alt="" loading="lazy" />
            </figure>
        </section>
    </div>

    <div class="divisions division_3 padding_4x">
        <section class="flex padding_1x">
        <figure>
            <img src="https://i.postimg.cc/T3vfL3G3/div-3.png" alt="" loading="lazy" />
        </figure>
        <article>
            <h3 class="title small">Recycle old wood pallets to create Beautiful Furniture Items.</h3>
            <p>We have a dedicated team to recycle wood waste to create artistic gadgets such as <b>Mobile Holders</b>, <b>Desktop Clocks</b>, <b>Wall Clocks</b>,<b>Pen Holders</b>, <b>Chop Boards</b>, <b>Decorative Items</b> & much more...</p>
            <a href="#" class="btn btn_1">Contact us</a>
        </article>
        </section>
    </div>
</main>

<footer class="flex">
    <section class="flex_content padding_2x">
        <a href="#"><i class="fa fa-facebook"></i></a>
        <a href="#"><i class="fa fa-instagram"></i></a>
        <a href="#"><i class="fa fa-linkedin"></i></a>
        <a href="#"><i class="fa fa-youtube"></i></a>
    </section>
    <section class="flex_content">
        <a href="#">Home</a>
        <a href="#">Contact us</a>
        <a href="#">About us</a>
        <a href="#">Cookie Policy</a>
    </section>
    <section class="flex_content padding_1x">
        <p>© 2023 website name || All rights reserved</p>
    </section>
</footer>



<div class="additional flex"></div>
<a href="#" id="roll_back" class="animate"><i class="fa fa-angle-up"></i></a>

    <script src="script.js"></script>

</div>

  );
}

export default App;
