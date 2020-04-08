
$('#show').on('click',showPic);

function showPic(){
var userId = document.getElementById("Id").value;
var url_r = 'https://api.vk.com/method/users.get?user_ids='+userId+'&fields=photo_max_orig,status&access_token=4ca8d4ef4ca8d4ef4ca8d4ef8d4cc68c6844ca84ca8d4ef114db4f146fc92795c51ebb5&v=5.52';
	$.ajax({
	url: url_r,
		method : 'GET',
		dataType:'jsonp',
		success : function (data)
		{
			console.log(data);
					var f = data.response[0];
							var html = '';
							html +='<li>'+ '<img src="'+f.photo_max_orig+'"/>'+
              '<h4>'+f.status+'</h4>'
							+'</li>';

$('ul').html(html);
		}
		});
}

it('renders selector being enabled and visible', () => {
  const { getByTestId } = render(<App />);
  const selector = getByTestId('selector');
  expect(selector).toBeInTheDocument();
  expect(selector).toBeVisible();
  expect(selector).toBeEnabled();
});

it('renders selector with correct initial text', () => {
  const { getByTestId } = render(<App />);
  const selector = getByTestId('selector');
  expect(selector).toBeInTheDocument();
  expect(selector).toHaveTextContent('Andorra');
});

it('renders correct initial image', () => {
  const { getByTestId } = render(<App />);
  const image = getByTestId('image');
  expect(image).toBeInTheDocument();
  expect(image).toHaveProperty('src','https://www.countryflags.io/AD/shiny/64.png');
});
