<?php

class Manage_Acceptable_Group_Cookie_List implements JsonSerializable {
    protected $usage;
    protected $settings;
    protected $essential;

    public function __construct(array $cookie_options) 
    {
        $this->usage        = $cookie_options['usage'];
        $this->settings     = $cookie_options['settings'];
        $this->essential    = $cookie_options['essential'];
    }
    
    public function getEssential() 
    {
        return $this->essential;
    }
    
    public function getSettings()
    {
        return $this->settings;
    }

    public function getUsage()
    {
        return $this->usage;
    }

    public function jsonSerialize()
    {
        return 
        [
            'usage'       => $this->getUsage(),
            'settings'    => $this->getSettings(),
            'essential'   => $this->getEssential()
        ];
    }
}