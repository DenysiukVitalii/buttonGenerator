(function() {


	var app = {
		initialize: function() {
			this.setUpListeners();
			this.updateResult();
		},
		setUpListeners: function() {
		
			// изменение радиуса
			$('#increase-radius').on('click', $.proxy(this.increaseRadius, this));
			$('#reduce-radius').on('click', $.proxy(this.reduceRadius, this));
			
			
			//изменение цвета
			$('#bg-color').on('change', $.proxy(this.bgChangeColor, this));
			$('#border-color').on('change', $.proxy(this.brChangeColor, this));

			// изменение цвета(hover)
			$('#bg-color-hover').on('change', $.proxy(this.bgChangeColorHover, this));
			$('#border-color-hover').on('change', $.proxy(this.brChangeColorHover, this));			

		},

		create : $('.create'),
		MAXRADIUS : 20,
		MINRADIUS : 0,
		

		bgChangeColor: function() {
			var newColor = '#' + $('#bg-color').val();
				this.create.css({
					'background-color' :  newColor
				});
					this.updateResult();
		},

		brChangeColor: function() {
			var newColor = '#' + $('#border-color').val();
				this.create.css({
					'border-color' :  newColor
				});

				this.updateResult();
		},

		bgChangeColorHover: function() {
		
						this.create.hover(
		  				function () {
		  			   var newColorHover = '#' + $('#bg-color-hover').val(),
		  			   	   myTrans = $('#trans').val();
		  			   	   

		  			   if (isNaN(myTrans)) {
		  			   	 alert('Неверный ввод! Введите число!');
		  			   	 $('#trans').val(0);
		  			   } 

							 $(this).css({'background-color' :  newColorHover,
														'transition-duration' : myTrans + 's'});
    				  },

 				     function () {
 				     	var newColor = '#' + $('#bg-color').val();
 				     	newColorHover = newColor;
  			      $(this).css({'background-color' :  newColorHover});
  			     }

  				  );
    		
					this.updateResult();
		},

		brChangeColorHover: function() {
					
						this.create.hover(
		  				function () {
		  			   var newColorHover = '#' + $('#border-color-hover').val();

     	 		   	 $(this).css({'border-color' :  newColorHover});
    				  },

 				     function () {
 				     	var newColor = '#' + $('#border-color').val();
 				     	newColorHover = newColor;
  			      $(this).css({'border-color' :  newColorHover});
  			     }

  				  );
    		
					this.updateResult();
		},

		increaseRadius: function() {
			var currentRadius = this.create.css('border-radius'),
						step = $('#step').val(),
						newRadius = (parseInt(currentRadius) + parseInt(step));

						if(newRadius > this.MAXRADIUS) {
							newRadius = this.MAXRADIUS;
							$('#increase-radius').addClass('disabled');
						}

						if(newRadius > this.MINRADIUS) {
							$('#reduce-radius').removeClass('disabled');
						}

						this.create.css({
							'border-radius' : newRadius
						});

						this.updateResult();
		},

		reduceRadius: function() {
			var currentRadius = this.create.css('border-radius'),
						step = $('#step').val(),
						newRadius = (parseInt(currentRadius) - parseInt(step));

						if(newRadius < this.MINRADIUS) {
							newRadius = this.MINRADIUS;
							$('#reduce-radius').addClass('disabled');
						}

						if(newRadius < this.MAXRADIUS) {
							$('#increase-radius').removeClass('disabled');
						}

						this.create.css({
							'border-radius' : newRadius
						});

						this.updateResult();
		},



		updateResult: function() {
						var borderRad = this.create.css('border-radius'),
						bgcolor = this.create.css('background-color'),
						brcolor = this.create.css('border-color'),
						
						bgcolorhover = '#' + $('#bg-color-hover').val(),
						brcolorhover = '#' + $('#border-color-hover').val(),
						trans = $('#trans').val() + 's';

						codeResultArea = $('#code-result');
						codeResultArea.text(
									'.button {\n' + 
									'-moz-border-radius: ' + borderRad + ';\n' +
									'-webkit-border-radius: ' + borderRad + ';\n' +
									'border-radius: ' + borderRad + ';\n' +
									'border-color: ' + brcolor + ';\n' + 
									'background-color: ' + bgcolor + ';\n' +
									'}\n' + 
									'.button:hover {\n' + 
									 'background-color: ' + bgcolorhover + ';\n' +
									 'border-color: ' + brcolorhover + ';\n' +
									 'transition-duration: ' + trans + ';\n' +

									 '}\n' 


							);

		}
	}

	app.initialize();

}());