App = React.createClass({
   render: function() {
      var styles = {
         margin: '0 auto',
         textAlign: 'center',
         width: '90%'
      };
      return (
         <div style={styles}>
            <h1>GIF's Search</h1>
            <p>
               Find gif on <a href='http://giphy.com'>giphy</a>. Press enter to get more gif.
            </p>
            <Search />
            <Gif />
         </div>
      );
   }
});
