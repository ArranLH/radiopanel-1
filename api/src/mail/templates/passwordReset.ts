export const passwordReset = `<mjml>
<mj-head>
  <mj-title>RadioPanel</mj-title>
  <mj-preview>Reset your password</mj-preview>
  <mj-attributes>
	<mj-all font-family="'Helvetica Neue', Helvetica, Arial, sans-serif"></mj-all>
	<mj-text font-weight="400" font-size="16px" color="#000000" line-height="24px" font-family="'Helvetica Neue', Helvetica, Arial, sans-serif"></mj-text>
  </mj-attributes>
  <mj-style inline="inline">
	.text-link {
	  color: #5e6ebf
	}
  </mj-style>
  <mj-style inline="inline">
	.footer-link {
	  color: #888888
	}
  </mj-style>

</mj-head>
<mj-body background-color="#181818" width="600px">
  <mj-section full-width="full-width" background-color="#E86856" padding-bottom="0">
	<mj-column width="100%">
	  <mj-image src="{{ config.frontendBaseUrl }}/assets/img/logo-monochrome-light.png" alt="" align="center" width="150px" padding-bottom="30px" />
	  <mj-image border-radius="20px 20px 0 0" src="{{ config.frontendBaseUrl }}/assets/img/mail-header-password-reset.png" width="600px" alt="" padding="0" href="{{ config.frontendBaseUrl }}" />
	</mj-column>
  </mj-section>
  <mj-section background-color="#FF926B"></mj-section>
  <mj-wrapper padding-top="0" padding-bottom="0" css-class="body-section">
	<mj-section border-radius="0 0 20px 20px" background-color="#292929" padding-left="15px" padding-right="15px">
	  <mj-column width="100%">
		<mj-text color="#FFF" font-weight="bold" font-size="20px">
		  Reset you password
		</mj-text>
		<mj-text color="#e6e6e6" font-size="16px">
		  Hey {{ user.firstName }},
		</mj-text>
		<mj-text color="#e6e6e6" font-size="16px">
		  Want to reset your password? No problem!
		</mj-text>
		<mj-text color="#e6e6e6" font-size="16px">
			If you want to reset your password, simply press the "Reset password" button down below. If you did not request this password reset feel free to ignore this email.
		</mj-text>
		<mj-button border-radius="50px" background-color="#FF926B" align="center" color="#ffffff" font-size="17px" font-weight="bold" href="{{ config.frontendBaseUrl }}/auth/reset-password/{{ passwordReset.uuid }}" width="300px">
		  Reset password
		</mj-button>
	  </mj-column>
	</mj-section>
  </mj-wrapper>

  <mj-wrapper full-width="full-width">
	<mj-section>
	  <mj-column width="100%" padding="0">
		<!-- <mj-text color="#445566" font-size="11px" align="center" line-height="16px">
		  You are receiving this mail because someone invited you to join CRP.
		</mj-text> -->
		<mj-text color="#616161" font-size="11px" align="center" line-height="16px">
		  &copy; RadioPanel, All Rights Reserved.
		</mj-text>
	  </mj-column>
	</mj-section>
  </mj-wrapper>
</mj-body>
</mjml>
`