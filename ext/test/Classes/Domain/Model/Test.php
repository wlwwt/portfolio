<?php
namespace TYPO3\Test\Domain\Model;

/***************************************************************
 *  Copyright notice
 *
 *  (c) 2013 
 *  All rights reserved
 *
 *  This script is part of the TYPO3 project. The TYPO3 project is
 *  free software; you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation; either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  The GNU General Public License can be found at
 *  http://www.gnu.org/copyleft/gpl.html.
 *
 *  This script is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  This copyright notice MUST APPEAR in all copies of the script!
 ***************************************************************/

/**
 *
 *
 * @package test
 * @license http://www.gnu.org/licenses/gpl.html GNU General Public License, version 3 or later
 *
 */
class Test extends \TYPO3\CMS\Extbase\DomainObject\AbstractEntity {

	/**
	 * Check
	 *
	 * @var \integer
	 */
	protected $checkbox;

	/**
	 * description
	 *
	 * @var \string
	 */
	protected $description;

	/**
	 * Returns the checkbox
	 *
	 * @return \integer $checkbox
	 */
	public function getCheckbox() {
		return $this->checkbox;
	}

	/**
	 * Sets the checkbox
	 *
	 * @param \integer $checkbox
	 * @return void
	 */
	public function setCheckbox($checkbox) {
		$this->checkbox = $checkbox;
	}

	/**
	 * Returns the description
	 *
	 * @return \string $description
	 */
	public function getDescription() {
		return $this->description;
	}

	/**
	 * Sets the description
	 *
	 * @param \string $description
	 * @return void
	 */
	public function setDescription($description) {
		$this->description = $description;
	}

}
?>