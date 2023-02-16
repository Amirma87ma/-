
<html lang="en">
<head>
<title>سایت بتمن واقعی</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
* {
box-sizing: border-box;
}
body {
font-family: Arial, Helvetica, sans-serif;
margin: 0;
}
.header {
padding: 80px;
text-align: center;
background: #1abc9c;
color: white;
}
.header h1 {
font-size: 40px;
}
.navbar {
overflow: hidden;
background-color: #333;
position: sticky;
position: -webkit-sticky;
top: 0;
}
.navbar a {
float: left;
display: block;
color: white;
text-align: center;
padding: 14px 20px;
text-decoration: none;
}
.navbar a.right {
float: right;
}
.navbar a:hover {
background-color: #ddd;
color: black;
}
.navbar a.active {
background-color: #666;
color: white;
}
.row {
display: -ms-flexbox; /* IE10 */
display: flex;
-ms-flex-wrap: wrap; /* IE10 */
flex-wrap: wrap;
}
.side {
-ms-flex: 30%; /* IE10 */
flex: 30%;
background-color: #f1f1f1;
padding: 20px;
}
.main {
-ms-flex: 70%; /* IE10 */
flex: 70%;
background-color: white;
padding: 20px;
}
.fakeimg {
background-color: #aaa;
width: 100%;
padding: 20px;
}
.footer {
padding: 20px;
text-align: center;
background: #dddd;
}
@media screen and (max-width: 700px) {
.row {
flex-direction: column;
}
}
@media screen and (max-width: 400px) {
.navbar a {
float: none;
width: 100%;
}
}
</style>
</head>
<body>

<div class="header">
<h1>سایت بتمن در واقعیت </h1>
<p style="font-family:arial; color:#FF0000;">!من بتمنم</p>
</div>

<div class="navbar">
<a href="#" class="active">Home</a>
<a href="#">Link</a>
<a href="#">Link</a>
<a href="#" class="right">Link</a>
</div>

<div class="row">
<div class="side">
<h2>About Me</h2>
<P> i am batman </P>
<H2 style="font-family:arial; color:#FF0000;">servers</H2>
<a href="https://discord.gg/3XAvay8sMW" class="active">GB</a>

<div class="footer">
<h2>اینجا محل تبلیغ شماست</h2>
</div>
    <!--replywp.com comment code -->
    <section class="main-comment-slider">
        <div class="container">
            <header class="slider-box-item-title">
                <h2 class="d-inline">نظرات</h2>
                <div class="border-des">
                    <span> سلام</span>
                </div>
            </header>
            <div class="row">
                <?php   $replywp_comments = get_comments('status=approve&number=5'); ?>
                <?php foreach ($replywp_comments as $replywp_comment) { ?>
                    <div class="col-6">
                        <div class="comment-slider-box">
                            <div class="comment-slider-content">
                                <p>
                                    <?php echo wp_html_excerpt(  $replywp_comment->comment_content, 250 ); ?>
                                </p>
                            </div>
                            <div class="row">
                                <div class="col-8">
                                    <div class="d-flex flex-row bd-highlight mb-3">
                                        <div class="p-2 bd-highlight">
                                            <div class="comment-slider-avatar">
                                                <?php echo get_avatar( $replywp_comment, '90' ); ?>
                                            </div>
                                        </div>
                                        <div class="p-2 bd-highlight">
                                            <div class="comment-slider-author">
                                                <div class="comment-author-main">
                                                    <h5 class="testimonial-author-name">
                                                        <?php echo strip_tags($replywp_comment->comment_author); ?>
                                                    </h5>
                                                    <span class="testimonial-author-role"><?php the_time('j F Y'); ?></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="click-author-video">
                                        <a href="<?php echo get_permalink($replywp_comment->ID); ?>#comment-<?php echo $replywp_comment->comment_ID; ?>">
                                            <i class="fa fa-play-circle"></i>
                                            <p class="sdfds">مشاهده ویدئو</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                <?php }  ?>
            </div>
        </div>
    </section>
    <!--replywp.com comment code -->
</body>
</html>
