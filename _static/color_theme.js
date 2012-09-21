function setDarkTheme()
{
  $( 'body' ).css( 'background-color', '#dee9ff' );
  $( 'a' ).css( 'color', '#ccdeff' );
  $( 'pre' ).css({ 'color':'#e3edff', 'background-color':'#100033' });
  $( ':header' ).css({ 'color':'#f1f1f1', 'background-color':'#224380' });
  $( 'div.body' ).css({ 'color':'white', 'background-color':'#0a001f' });
  $( 'div.footer' ).css( 'color', '#0a001f' );
  $( 'div.footer a' ).css( 'color', '#0a001f' );
  $( 'div.related' ).css({ 'color':'white', 'background-color':'#25498a' });
  $( 'div.related a' ).css( 'color', '#ccdeff' );
  $( 'div.documount' ).css( 'background-color', '#2c56a4' );
  $( 'div.sphinxsidebar' ).css({ 'color':'#dee9ff', 'background-color':'#2c56a4' });
  $( 'div.sphinxsidebar h3' ).css({ 'color':'#dee9ff', 'background-color':'#2c56a4' });
  $( 'div.sphinxsidebar h4' ).css({ 'color':'#dee9ff', 'background-color':'#2c56a4' });
  $( 'div.sphinxsidebar a' ).css({ 'color':'#ccdeff', 'background-color':'#2c56a4' });
  $( 'div.sphinxsidebar input' ).css({ 'color':'#dee9ff', 'background-color':'#295096' });
  createCookie( 'color_theme', 'dark', 365 )
}
function setLightTheme()
{
  $( 'body' ).css( 'background-color', '#0a001f' );
  $( 'a' ).css( 'color', '#25498a' );
  $( 'pre' ).css({ 'color':'black', 'background-color':'#e3edff' });
  $( ':header' ).css({ 'color':'#224380', 'background-color':'#f1f1f1' });
  $( 'div.body' ).css({ 'color':'black', 'background-color':'white' });
  $( 'div.footer' ).css( 'color', '#dee9ff' );
  $( 'div.footer a' ).css( 'color', '#dee9ff' );
  $( 'div.related' ).css({ 'color':'white', 'background-color':'#25498a' });
  $( 'div.related a' ).css( 'color', '#ccdeff' );
  $( 'div.documount' ).css( 'background-color', '#2c56a4' );
  $( 'div.sphinxsidebar' ).css({ 'color':'#dee9ff', 'background-color':'#2c56a4' });
  $( 'div.sphinxsidebar a' ).css({ 'color':'#ccdeff', 'background-color':'#2c56a4' });
  $( 'div.sphinxsidebar h3' ).css({ 'color':'#dee9ff', 'background-color':'#2c56a4' });
  $( 'div.sphinxsidebar h4' ).css({ 'color':'#dee9ff', 'background-color':'#2c56a4' });
  $( 'div.sphinxsidebar input' ).css({ 'color':'#dee9ff', 'background-color':'#295096' });
  createCookie( 'color_theme', 'light', 365 )
}
$(document).ready(function(){
  var color_theme = readCookie( 'color_theme' );
  if( color_theme == 'dark' )
    {
    setDarkTheme();
    }
});